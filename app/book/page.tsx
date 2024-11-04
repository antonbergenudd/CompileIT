'use client'

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { SlEmotsmile } from 'react-icons/sl';

const BookPage = () => {
  const router = useRouter()

  const searchParams = useSearchParams();
  const roomId = searchParams.get('roomId')!;
  const date = searchParams.get('date')!;

  const [bookedBy, setBookedBy] = useState('');
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false)

  /**
   * Execute POST API - separate server side logic and client side
   */
  const createBooking = async () => {
    try {
      const bookingResp = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomId,
          bookedBy,
          date
        }),
      });

      if (!bookingResp.ok) return;

      setFeedbackDialogOpen(true);
    } catch (error) {
      // Implement error handling here

      console.error("Error creating booking and updating time:", error);
    }    
  };

  return (
    <>
      <div className='p-8 bg-zinc-200 relative h-screen flex flex-col'>
        <h1 className='text-5xl pt-16 pb-8'>Vem bokar?</h1>

        <div>
          <label className="text-xl">Förnamn och efternamn</label>
          <input 
            type="text" 
            value={bookedBy} 
            className="border border-zinc-400 text-md rounded-xl block w-full p-3 bg-zinc-200" 
            placeholder="Skriv ditt fullständiga namn här" 
            onChange={(e) => setBookedBy(e.target.value)}
          />
        </div>

        <div className="fixed bottom-0 left-0 w-full p-4 mb-8">
          <button className="w-full bg-black text-white py-3 rounded-xl disabled:opacity-50" onClick={createBooking} disabled={bookedBy === ''}>
            Boka
          </button>
        </div>
      </div>

      {/* Feedback dialog */}
      <Dialog open={feedbackDialogOpen} onClose={() => router.push('/home')} className="relative z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
      
        <div className="md-rounded fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="flex max-w-lg space-y-4 border bg-white px-12 py-6 rounded-xl items-center flex-col justify-center">
            <DialogTitle className="text-lg">Ditt rum är bokat!</DialogTitle>
            <Description><SlEmotsmile size="30" /></Description>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
export default BookPage;
