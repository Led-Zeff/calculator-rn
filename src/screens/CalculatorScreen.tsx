import React from 'react';
import { Text, View } from 'react-native';
import { CalcButton } from '../components/CalcButton';
import { useCalculator } from '../hooks/useCalculator';
import { appTheme } from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    history,
    operation,
    formula,
    clear,
    togglePositive,
    del,
    appendNumber,
    applyOperation,
    calculate,
  } = useCalculator();

  return (
    <View style={appTheme.calcConatiner}>
      {history.map(({ num1, operator: op, num2 }, index) => (
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={appTheme.resultHistory}
          key={index}>
          {num1} {op} {num2} {index === history.length - 1 && operation}
        </Text>
      ))}
      <Text style={appTheme.result} numberOfLines={1} adjustsFontSizeToFit>
        {formula}
      </Text>

      <View style={appTheme.buttonRow}>
        <CalcButton text="C" color="gray" onPress={clear} />
        <CalcButton text="+/-" color="gray" onPress={togglePositive} />
        <CalcButton text="del" color="gray" onPress={del} />
        <CalcButton
          text="/"
          color="orange"
          onPress={() => applyOperation('/')}
        />
      </View>

      <View style={appTheme.buttonRow}>
        <CalcButton text="7" onPress={() => appendNumber('7')} />
        <CalcButton text="8" onPress={() => appendNumber('8')} />
        <CalcButton text="9" onPress={() => appendNumber('9')} />
        <CalcButton
          text="X"
          color="orange"
          onPress={() => applyOperation('x')}
        />
      </View>

      <View style={appTheme.buttonRow}>
        <CalcButton text="4" onPress={() => appendNumber('4')} />
        <CalcButton text="5" onPress={() => appendNumber('5')} />
        <CalcButton text="6" onPress={() => appendNumber('6')} />
        <CalcButton
          text="-"
          color="orange"
          onPress={() => applyOperation('-')}
        />
      </View>

      <View style={appTheme.buttonRow}>
        <CalcButton text="1" onPress={() => appendNumber('1')} />
        <CalcButton text="2" onPress={() => appendNumber('2')} />
        <CalcButton text="3" onPress={() => appendNumber('3')} />
        <CalcButton
          text="+"
          color="orange"
          onPress={() => applyOperation('+')}
        />
      </View>

      <View style={appTheme.buttonRow}>
        <CalcButton text="0" onPress={() => appendNumber('0')} fat />
        <CalcButton text="." onPress={() => appendNumber('.')} />
        <CalcButton text="=" color="orange" onPress={calculate} />
      </View>
    </View>
  );
};
