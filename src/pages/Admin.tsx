import React, { useEffect, useState } from 'react';
import { db, auth, signInWithGoogle, logout } from '../firebase';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Trash2, LogOut, LogIn, Mail, User as UserIcon, Calendar, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: any;
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [testStatus, setTestStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const ADMIN_EMAIL = "kuteyioluwaloyevincent291@gmail.com";

  const handleTestEmail = async () => {
    setTestStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: "System Test",
          email: "test@example.com",
          subject: "Email Configuration Test",
          message: "This is a test message to verify your Gmail App Password is working correctly."
        })
      });
      if (response.ok) {
        setTestStatus('success');
        setTimeout(() => setTestStatus('idle'), 3000);
      } else {
        setTestStatus('error');
      }
    } catch (err) {
      setTestStatus('error');
    }
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
        const unsubscribeMessages = onSnapshot(q, (snapshot) => {
          const msgs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Message[];
          setMessages(msgs);
          setLoading(false);
        }, (err) => {
          console.error("Firestore error:", err);
          setError("You don't have permission to view these messages.");
          setLoading(false);
        });
        return () => unsubscribeMessages();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteDoc(doc(db, 'messages', id));
      } catch (err) {
        console.error("Delete error:", err);
        alert("Failed to delete message.");
      }
    }
  };

  if (loading) {
    return (
      <div className="pt-24 pb-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="pt-24 pb-12 section-padding text-center">
        <div className="max-w-md mx-auto bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
          <UserIcon size={48} className="mx-auto text-slate-300 mb-6" />
          <h2 className="text-2xl font-bold mb-4">Admin Access Required</h2>
          <p className="text-slate-600 mb-8">
            Please sign in with the administrator account to view form submissions.
          </p>
          <button onClick={signInWithGoogle} className="btn-primary w-full flex items-center justify-center gap-2">
            <LogIn size={20} /> Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 bg-brand-blue-grey min-h-screen">
      <div className="section-padding">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-slate-600">Managing {messages.length} form submissions</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleTestEmail}
              disabled={testStatus === 'loading'}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                testStatus === 'success' ? 'bg-green-100 text-green-700' :
                testStatus === 'error' ? 'bg-red-100 text-red-700' :
                'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {testStatus === 'loading' ? 'Testing...' : 
               testStatus === 'success' ? 'Email Working!' :
               testStatus === 'error' ? 'Email Failed - Check Secrets' :
               'Test Email Config'}
            </button>
            <button onClick={logout} className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors">
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-8 border border-red-200">
            {error}
          </div>
        )}

        <div className="grid gap-6">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group"
              >
                <button 
                  onClick={() => handleDelete(msg.id)}
                  className="absolute top-6 right-6 text-slate-300 hover:text-red-500 transition-colors p-2"
                  title="Delete message"
                >
                  <Trash2 size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  <div className="flex items-start gap-3">
                    <UserIcon size={18} className="text-brand-primary mt-1 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Sender</div>
                      <div className="font-bold">{msg.name}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-brand-primary mt-1 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                      <div className="font-bold">{msg.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="text-brand-primary mt-1 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Date</div>
                      <div className="font-bold">
                        {msg.createdAt?.toDate ? msg.createdAt.toDate().toLocaleString() : 'Just now'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-50 pt-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare size={18} className="text-brand-primary mt-1 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Subject: {msg.subject}</div>
                      <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {msg.message}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {messages.length === 0 && !loading && (
            <div className="bg-white p-20 rounded-2xl text-center border border-dashed border-slate-200">
              <MessageSquare size={48} className="mx-auto text-slate-200 mb-6" />
              <p className="text-slate-500">No messages found yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
