import evernight from '../../../public/images/march.jpg';

export default function MainContent() {
  return (
    <main>
      <h2 className="text-4xl font-bold text-center">Welcome!</h2>
      <div className='grid place-items-center my-5'>
        <img src={evernight} className="text-center mx-auto h-[250px] w-[250px] rounded-full object-cover" />
      </div>
      <p className="text-2xl font-semibold text-center">Selamat Datang Ke Website React + Laravel saya</p>
    </main>
  );
}