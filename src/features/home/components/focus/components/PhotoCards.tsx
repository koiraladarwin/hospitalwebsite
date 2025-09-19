import backPain from '../../../../../assets/backPain.jpg'
import neckPain from '../../../../../assets/neckPain.jpg'
import kneePain from '../../../../../assets/kneePain.jpg'
import jointsPain from '../../../../../assets/joinsPain.jpg'
import nervePain from '../../../../../assets/nervePain.jpg'
import migraine from '../../../../../assets/migraine.jpg'

function PhotoCards() {
  const cards = [
    { img: backPain, title: "BACK PAIN" },
    { img: neckPain, title: "NECK PAIN" },
    { img: kneePain, title: "KNEE PAIN" },
    { img: jointsPain, title: "JOINTS PAIN" },
    { img: nervePain, title: "NERVE COMPRESSION" },
    { img: migraine, title: "MIGRAINE" },
  ];

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 w-full pt-22  gap-y-5 lg:gap-y-0">
      {cards.map((card, index) => (
        <div key={index} className="flex w-full flex-col items-center px-5">
          <div className='bg-white shadow-xl p-2 rounded-full'>
            <img
              src={card.img}
              alt={card.title}
              className={`w-32 h-32 rounded-[50%] object-cover`}
            />
          </div>
          <h3 className={`font-poppins  ${card.title === 'NERVE COMPRESSION' ? 'text-center' : ''}`}>{card.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default PhotoCards;
