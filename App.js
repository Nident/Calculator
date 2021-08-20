import React from 'react';
import {StyleSheet,
   Text, View,
    TouchableOpacity,
     Vibration} from 'react-native';
import {useState} from 'react';


export default function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const FirstRow = ['C', 'DEL', '=','.']
  const numf = [ 1, 2, 3]
  const nums = [ 4, 5, 6]
  const numt = [ 7, 8, 9]
  const zero = [0]

  const SecondRow = [ "X",'-', '+',  '/' ]


function calculator() {

  let lastArr = currentNumber[currentNumber.length - 1]

  if (lastArr === '/' || lastArr === 'X' || lastArr === '-'
   || lastArr === '+' || lastArr === '.') {
    setCurrentNumber(currentNumber)
    return
  }
  else {
   let result = eval(currentNumber).toString()
  setCurrentNumber(result)
  return
 }
}

function  handlePressed (buttonPressed)  {
  if(buttonPressed === "/" || buttonPressed === "X" || 
  buttonPressed === "+" || buttonPressed === "-" ) {
    Vibration.vibrate(35)
    setCurrentNumber(currentNumber + buttonPressed)
    return
  }

  else if (buttonPressed === 0 || buttonPressed === 1 ||
      buttonPressed === 2 || buttonPressed === 3 
  || buttonPressed === 4 || buttonPressed === 5 || 
  buttonPressed === 6 || buttonPressed === 7|| buttonPressed === 8||
   buttonPressed === 9 || buttonPressed === ".") {
  Vibration.vibrate(35)
}

  switch(buttonPressed) {
    case "DEL": 
      Vibration.vibrate(55)
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1))
      return

    case "C":
      Vibration.vibrate(65)
      setLastNumber('')
      setCurrentNumber('')
      return

    case "=": 
      Vibration.vibrate(100)
      setLastNumber(currentNumber + '=')
      calculator()
      return
  }
  setCurrentNumber(currentNumber + buttonPressed)
}



return(
  <View style={styles.field}>
      
      <View style={styles.view}>
         <Text style={styles.Hystorytext}>{lastNumber}</Text>
         <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

        <View style={styles.Symbols}>
          {FirstRow.map(button => 
            <TouchableOpacity  key={button} style={styles.Operations} onPress={() => handlePressed(button)}>
              <Text style={styles.text}>{button}</Text>
           </TouchableOpacity>
            )}
          </View>


        <View style={styles.column}>
        
            <View style={styles.pgn}>
                 <View style={styles.digits}>
                     {numf.map(button => 
                      <TouchableOpacity style={styles.num} key={button} onPress={() => handlePressed(button)}>
                        <Text style={styles.text}>{button}</Text>
                       </TouchableOpacity>)}
                  </View>

                  <View style={styles.digits}>
                    {nums.map(button => 
                      <TouchableOpacity style={styles.num} key={button} onPress={() => handlePressed(button)}>
                         <Text style={styles.text}>{button}</Text>
                    </TouchableOpacity>)}
                  </View>

                  <View style={styles.digits}>
                    {numt.map(button => 
                      <TouchableOpacity style={styles.num} key={button} onPress={() => handlePressed(button)}>
                  <Text style={styles.text}>{button}</Text>
                    </TouchableOpacity>)}
                   </View>

                  <View style={styles.zeroView}>
                    {zero.map(button => 
                      <TouchableOpacity style={styles.zero} key={button} onPress={() => handlePressed(button)}>
                  <Text style={styles.text}>{button}</Text>
                    </TouchableOpacity>)}
                   </View>
              </View>




           <View style={styles.place}>
               {SecondRow.map(button =>
                   <TouchableOpacity key={button} style={styles.manipulations} onPress={() => handlePressed(button)}>
                     <Text style={styles.text}>{button}</Text>
                </TouchableOpacity>)}
                          </View>
              
      </View>
  </View>
)
}


 

const styles = StyleSheet.create({
  Hystorytext: {
    fontSize: 20,
    color: "#2E8B57"
  },
  field: {
    backgroundColor: 'black',
    height: '100%'
  },
  view: {
    height: 270,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText: {
    fontSize: 55,
    color: 'white',
    marginRight: 15
  },
  column: {
    flexDirection:"row"
  },

  Symbols: { 
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
    
  },
  Operations: {
    marginLeft: 1,
    borderColor: 'pink',
    borderRadius: 40,
    borderWidth: 3,
    paddingHorizontal: 31,
    paddingVertical: 7,
    
  },

  
  place: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    
  },

  pgn:{
    flexDirection: 'column'
  },
  manipulations: {
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 3,
    paddingHorizontal: 25,
    paddingVertical: 29,
    backgroundColor: 'pink'
  },
  digits: {
    flexDirection: 'row'
  },
   num: {
     margin: 1, 
     marginLeft: 5,
     borderRadius: 40,
     borderWidth: 3,
     paddingHorizontal: 35,
     paddingVertical: 29
   },
   zeroView: {
     borderRadius: 40,
     borderWidth: 3,
     alignItems: 'center',
     justifyContent: 'center',
     paddingVertical: 25
   },
  

  text: {
    fontSize: 35,
    color: 'white'
  }
})

 