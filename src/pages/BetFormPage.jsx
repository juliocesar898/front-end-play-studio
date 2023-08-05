import { useForm } from 'react-hook-form';
import { useBets } from '../context/BetsContext';
import { useNavigate } from 'react-router-dom';

function BetFormPage() {
  const { register, handleSubmit } = useForm();

  const {bets, createBet} = useBets()

  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    createBet(data)
    navigate('/bets')
  });

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Beat Code'
          {...register('codeBeat')}
          autoFocus
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        />
        <textarea
          rows='3'
          placeholder='Description'
          {...register('description')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'></textarea>
        <input
          type='number'
          placeholder='Amount'
          {...register('amount')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        />

        <button>Save</button>
      </form>
    </div>
  );
}

export default BetFormPage;
