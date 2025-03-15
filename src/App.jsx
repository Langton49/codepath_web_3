import { useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const objArray = [
    { question: 'https://flagsdb.com/img/flags/ag.svg', answer: 'Antigua and Barbuda' },
    { question: 'https://flagsdb.com/img/flags/bb.svg', answer: 'Barbados' },
    { question: 'https://flagsdb.com/img/flags/bz.svg', answer: 'Belize' },
    { question: 'https://flagsdb.com/img/flags/bt.svg', answer: 'Bhutan' },
    { question: 'https://flagsdb.com/img/flags/cv.svg', answer: 'Cape Verde' },
    { question: 'https://flagsdb.com/img/flags/dj.svg', answer: 'Djibouti' },
    { question: 'https://flagsdb.com/img/flags/gq.svg', answer: 'Equatorial Guinea' },
    { question: 'https://flagsdb.com/img/flags/gd.svg', answer: 'Grenada' },
    { question: 'https://flagsdb.com/img/flags/ki.svg', answer: 'Kiribati' },
    { question: 'https://flagsdb.com/img/flags/ls.svg', answer: 'Lesotho' },
    { question: 'https://flagsdb.com/img/flags/lr.svg', answer: 'Liberia' },
    { question: 'https://flagsdb.com/img/flags/mw.svg', answer: 'Malawi' },
    { question: 'https://flagsdb.com/img/flags/mv.svg', answer: 'Maldives' },
    { question: 'https://flagsdb.com/img/flags/mh.svg', answer: 'Marshall Islands' },
    { question: 'https://flagsdb.com/img/flags/mr.svg', answer: 'Mauritania' },
    { question: 'https://flagsdb.com/img/flags/mu.svg', answer: 'Mauritius' },
    { question: 'https://flagsdb.com/img/flags/mc.svg', answer: 'Monaco' },
    { question: 'https://flagsdb.com/img/flags/me.svg', answer: 'Montenegro' },
    { question: 'https://flagsdb.com/img/flags/nr.svg', answer: 'Nauru' },
    { question: 'https://flagsdb.com/img/flags/np.svg', answer: 'Nepal' },
    { question: 'https://flagsdb.com/img/flags/nu.svg', answer: 'Niue' },
    { question: 'https://flagsdb.com/img/flags/pw.svg', answer: 'Palau' },
    { question: 'https://flagsdb.com/img/flags/ws.svg', answer: 'Samoa' },
    { question: 'https://flagsdb.com/img/flags/st.svg', answer: 'Sao Tome and Principe' },
    { question: 'https://flagsdb.com/img/flags/sc.svg', answer: 'Seychelles' },
    { question: 'https://flagsdb.com/img/flags/sb.svg', answer: 'Solomon Islands' },
    { question: 'https://flagsdb.com/img/flags/sr.svg', answer: 'Suriname' },
    { question: 'https://flagsdb.com/img/flags/tl.svg', answer: 'Timor-Leste' },
    { question: 'https://flagsdb.com/img/flags/tv.svg', answer: 'Tuvalu' },
    { question: 'https://flagsdb.com/img/flags/ug.svg', answer: 'Uganda' },
    { question: 'https://flagsdb.com/img/flags/zm.svg', answer: 'Zambia' },
    { question: 'https://flagsdb.com/img/flags/ad.svg', answer: 'Andorra' },
    { question: 'https://flagsdb.com/img/flags/ao.svg', answer: 'Angola' },
    { question: 'https://flagsdb.com/img/flags/aw.svg', answer: 'Aruba' },
    { question: 'https://flagsdb.com/img/flags/bh.svg', answer: 'Bahrain' },
    { question: 'https://flagsdb.com/img/flags/bj.svg', answer: 'Benin' },
    { question: 'https://flagsdb.com/img/flags/bw.svg', answer: 'Botswana' },
    { question: 'https://flagsdb.com/img/flags/bf.svg', answer: 'Burkina Faso' },
    { question: 'https://flagsdb.com/img/flags/bi.svg', answer: 'Burundi' },
    { question: 'https://flagsdb.com/img/flags/km.svg', answer: 'Comoros' },
    { question: 'https://flagsdb.com/img/flags/cf.svg', answer: 'Central African Republic' },
    { question: 'https://flagsdb.com/img/flags/dm.svg', answer: 'Dominica' },
    { question: 'https://flagsdb.com/img/flags/er.svg', answer: 'Eritrea' },
    { question: 'https://flagsdb.com/img/flags/fj.svg', answer: 'Fiji' },
    { question: 'https://flagsdb.com/img/flags/gm.svg', answer: 'Gambia' },
    { question: 'https://flagsdb.com/img/flags/gn.svg', answer: 'Guinea' },
    { question: 'https://flagsdb.com/img/flags/gw.svg', answer: 'Guinea-Bissau' },
    { question: 'https://flagsdb.com/img/flags/gy.svg', answer: 'Guyana' },
    { question: 'https://flagsdb.com/img/flags/la.svg', answer: 'Laos' },
    { question: 'https://flagsdb.com/img/flags/lc.svg', answer: 'Saint Lucia' },
    { question: 'https://flagsdb.com/img/flags/vc.svg', answer: 'Saint Vincent and the Grenadines' },
    { question: 'https://flagsdb.com/img/flags/sm.svg', answer: 'San Marino' },
    { question: 'https://flagsdb.com/img/flags/sl.svg', answer: 'Sierra Leone' },
    { question: 'https://flagsdb.com/img/flags/sz.svg', answer: 'Eswatini' },
    { question: 'https://flagsdb.com/img/flags/tg.svg', answer: 'Togo' },
    { question: 'https://flagsdb.com/img/flags/to.svg', answer: 'Tonga' },
    { question: 'https://flagsdb.com/img/flags/tz.svg', answer: 'Tanzania' },
    { question: 'https://flagsdb.com/img/flags/tt.svg', answer: 'Trinidad and Tobago' },
    { question: 'https://flagsdb.com/img/flags/zw.svg', answer: 'Zimbabwe' },
    { question: 'https://flagsdb.com/img/flags/so.svg', answer: 'Somalia' }
  ];


  const [currIndex, setCurrIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const [cardArray, setArray] = useState(objArray);
  const [userInput, setUserInput] = useState(''); 
  const [isCorrect, setIsCorrect] = useState(null);
  const defaultCard = {
    question: 'https://flagsdb.com/img/flags/un.svg',
    answer: 'Click NEXT to start!'
  };

  const nextClick = () => {
    if (currIndex === cardArray.length) {
      return;
    }
    setCurrIndex(currIndex + 1);
    setCardKey(cardKey + 1);
    setIsCorrect(null); 
    setUserInput('');
  };

  const onSubmit = () => {
    if (currIndex === 0) {
      return; 
    }
  
    const currentAnswer = cardArray[currIndex - 1].answer.toLowerCase().replace(/[^a-zA-Z\s]/g, '');
    const userGuess = userInput.toLowerCase().replace(/[^a-zA-Z\s]/g, '');
    const userWords = userGuess.split(/\s+/);
    const isCorrect = userWords.some((word) => currentAnswer.includes(word));
  
    setIsCorrect(isCorrect);
  };

  const shuffle = () => {
    const shuffledArray = [...cardArray]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setArray(shuffledArray); 
    setCurrIndex(0); 
    setCardKey(cardKey + 1); 
    setIsCorrect(null); 
    setUserInput('');
  };

  const prevClick = () => {
    if (currIndex === 0) {
      return;
    }
    setCurrIndex(currIndex - 1);
    setCardKey(cardKey - 1);
    setIsCorrect(null); 
    setUserInput('');
  };

  return (
    <div className='page'>
      <h1>Guess That Country!!</h1>
      <p className='intro'>
        {'This deck has a list of 60 obscure countries most people haven\'t heard of. Do you think you can get them all? \n Click \'NEXT\' to start!'}
      </p>
      <button className='prev' onClick={prevClick}>PREV</button>
      <Card
        key={cardKey}
        question={currIndex === 0 ? defaultCard.question : cardArray[currIndex - 1].question}
        answer={currIndex === 0 ? defaultCard.answer : cardArray[currIndex - 1].answer}
      />
      <div className='userInput'>
        <p>TAKE A GUESS</p>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} 
          placeholder="Enter your guess"
        />
        <button className={'submitAns ' + (isCorrect === null ? '' : isCorrect ? 'correct' : 'incorrect')}onClick={onSubmit}>SUBMIT</button>
        <button className='shuffle' onClick={shuffle}>SHUFFLE</button>
      </div>
      <button className='next' onClick={nextClick}>NEXT</button>
    </div>
  );
}

export default App;