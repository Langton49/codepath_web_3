import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [currIndex, setCurrIndex] = useState('-1')
  const [cardKey, setCardKey] = useState(0)

  const cardDictionary = {
    '-1': { question: '', answer: 'This deck has a list of 60 obscure countries most people haven\'t heard of. Do you think you can get them all? \n Click \'NEXT\' to start!' },
    0: { question: 'https://flagsdb.com/img/flags/ag.svg', answer: 'Antigua and Barbuda' },
    1: { question: 'https://flagsdb.com/img/flags/bb.svg', answer: 'Barbados' },
    2: { question: 'https://flagsdb.com/img/flags/bz.svg', answer: 'Belize' },
    3: { question: 'https://flagsdb.com/img/flags/bt.svg', answer: 'Bhutan' },
    4: { question: 'https://flagsdb.com/img/flags/cv.svg', answer: 'Cape Verde' },
    5: { question: 'https://flagsdb.com/img/flags/dj.svg', answer: 'Djibouti' },
    6: { question: 'https://flagsdb.com/img/flags/gq.svg', answer: 'Equatorial Guinea' },
    7: { question: 'https://flagsdb.com/img/flags/gd.svg', answer: 'Grenada' },
    8: { question: 'https://flagsdb.com/img/flags/ki.svg', answer: 'Kiribati' },
    9: { question: 'https://flagsdb.com/img/flags/ls.svg', answer: 'Lesotho' },
    10: { question: 'https://flagsdb.com/img/flags/lr.svg', answer: 'Liberia' },
    11: { question: 'https://flagsdb.com/img/flags/mw.svg', answer: 'Malawi' },
    12: { question: 'https://flagsdb.com/img/flags/mv.svg', answer: 'Maldives' },
    13: { question: 'https://flagsdb.com/img/flags/mh.svg', answer: 'Marshall Islands' },
    14: { question: 'https://flagsdb.com/img/flags/mr.svg', answer: 'Mauritania' },
    15: { question: 'https://flagsdb.com/img/flags/mu.svg', answer: 'Mauritius' },
    16: { question: 'https://flagsdb.com/img/flags/mc.svg', answer: 'Monaco' },
    17: { question: 'https://flagsdb.com/img/flags/me.svg', answer: 'Montenegro' },
    18: { question: 'https://flagsdb.com/img/flags/nr.svg', answer: 'Nauru' },
    19: { question: 'https://flagsdb.com/img/flags/np.svg', answer: 'Nepal' },
    20: { question: 'https://flagsdb.com/img/flags/nu.svg', answer: 'Niue' },
    21: { question: 'https://flagsdb.com/img/flags/pw.svg', answer: 'Palau' },
    22: { question: 'https://flagsdb.com/img/flags/ws.svg', answer: 'Samoa' },
    23: { question: 'https://flagsdb.com/img/flags/st.svg', answer: 'Sao Tome and Principe' },
    24: { question: 'https://flagsdb.com/img/flags/sc.svg', answer: 'Seychelles' },
    25: { question: 'https://flagsdb.com/img/flags/sb.svg', answer: 'Solomon Islands' },
    26: { question: 'https://flagsdb.com/img/flags/sr.svg', answer: 'Suriname' },
    27: { question: 'https://flagsdb.com/img/flags/tl.svg', answer: 'Timor-Leste' },
    28: { question: 'https://flagsdb.com/img/flags/tv.svg', answer: 'Tuvalu' },
    29: { question: 'https://flagsdb.com/img/flags/ug.svg', answer: 'Uganda' },
    30: { question: 'https://flagsdb.com/img/flags/zm.svg', answer: 'Zambia' },
    31: { question: 'https://flagsdb.com/img/flags/ad.svg', answer: 'Andorra' },
    32: { question: 'https://flagsdb.com/img/flags/ao.svg', answer: 'Angola' },
    33: { question: 'https://flagsdb.com/img/flags/aw.svg', answer: 'Aruba' },
    34: { question: 'https://flagsdb.com/img/flags/bh.svg', answer: 'Bahrain' },
    35: { question: 'https://flagsdb.com/img/flags/bj.svg', answer: 'Benin' },
    36: { question: 'https://flagsdb.com/img/flags/bw.svg', answer: 'Botswana' },
    37: { question: 'https://flagsdb.com/img/flags/bf.svg', answer: 'Burkina Faso' },
    38: { question: 'https://flagsdb.com/img/flags/bi.svg', answer: 'Burundi' },
    39: { question: 'https://flagsdb.com/img/flags/km.svg', answer: 'Comoros' },
    40: { question: 'https://flagsdb.com/img/flags/cf.svg', answer: 'Central African Republic' },
    41: { question: 'https://flagsdb.com/img/flags/dm.svg', answer: 'Dominica' },
    42: { question: 'https://flagsdb.com/img/flags/er.svg', answer: 'Eritrea' },
    43: { question: 'https://flagsdb.com/img/flags/fj.svg', answer: 'Fiji' },
    44: { question: 'https://flagsdb.com/img/flags/gm.svg', answer: 'Gambia' },
    45: { question: 'https://flagsdb.com/img/flags/gn.svg', answer: 'Guinea' },
    46: { question: 'https://flagsdb.com/img/flags/gw.svg', answer: 'Guinea-Bissau' },
    47: { question: 'https://flagsdb.com/img/flags/gy.svg', answer: 'Guyana' },
    48: { question: 'https://flagsdb.com/img/flags/la.svg', answer: 'Laos' },
    49: { question: 'https://flagsdb.com/img/flags/lc.svg', answer: 'Saint Lucia' },
    50: { question: 'https://flagsdb.com/img/flags/vc.svg', answer: 'Saint Vincent and the Grenadines' },
    51: { question: 'https://flagsdb.com/img/flags/sm.svg', answer: 'San Marino' },
    52: { question: 'https://flagsdb.com/img/flags/sl.svg', answer: 'Sierra Leone' },
    53: { question: 'https://flagsdb.com/img/flags/sz.svg', answer: 'Eswatini' },
    54: { question: 'https://flagsdb.com/img/flags/tg.svg', answer: 'Togo' },
    55: { question: 'https://flagsdb.com/img/flags/to.svg', answer: 'Tonga' },
    56: { question: 'https://flagsdb.com/img/flags/tz.svg', answer: 'Tanzania' },
    57: { question: 'https://flagsdb.com/img/flags/tt.svg', answer: 'Trinidad and Tobago' },
    58: { question: 'https://flagsdb.com/img/flags/zw.svg', answer: 'Zimbabwe' },
    59: { question: 'https://flagsdb.com/img/flags/so.svg', answer: 'Somalia' }
};


  const nextClick = () => {
    setCurrIndex(Math.floor(Math.random() * 60));
    setCardKey(cardKey + 1);
  }

  return (
    <div className='page'>
      <h1>Guess That Country!!</h1>
      <Card key={cardKey} question={cardDictionary[currIndex].question} answer={cardDictionary[currIndex].answer}></Card>
      <button className='next' onClick={nextClick}>NEXT</button>
    </div>
  )
}

export default App
