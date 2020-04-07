import React, {Component} from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { Card, Button } from 'react-native-elements'
import questions from './questions.json'
const TITLE_STATE = 0
const QUESTION_STATE = 1


export default class App extends React.Component {
  constructor (props) {
    super()
    this.state = {
      currentState: TITLE_STATE,
      currentQuestion: 0,
      score: 0
    }
  }

  nextQuestion (a) {
    if (a.correct) {
      this.setState({ score: this.state.score + 1 })
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  scoreMessage () {
    if (this.state.score / questions.length > 0.8) {
      return 'Hello ARMY! You sure know BTS!'
    } else if (this.state.score / questions.length >= 0.8) {
      return 'Could pass for a Kpop Stan... '
    } else {
      return 'Do you even kpop? Lets Try again!'
    }
  }

  render () {
    return (
      <Card containerStyle={styles.container}>
        {(this.state.currentState === TITLE_STATE)
          ? <>
            <Text style={styles.title}>How well do you know:<br /> BTS <br />(An ARMY Challenge.) </Text>
            <Text style={styles.text}>Are you really BTS ARMY? Test your knowledge with this hard to beat quiz.</Text>
            
            <Button title="LES GET THIS BREAD!" buttonStyle={styles.button} onClick = {() => this.setState({ currentState: QUESTION_STATE })} />
          </>
          : (this.state.currentQuestion < questions.length)
            ? <>
              <Text style={styles.title}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button title={ans.text} key={i} buttonStyle={styles.button} onClick={() => this.nextQuestion(ans)} />
                })}
              </View>
            </>
            : <>
              <Text style={styles.title}>You Completed the Quiz!</Text>
              <Text style={styles.title}>Score: {this.state.score}/{questions.length}</Text>
              <Text style={styles.text}>{this.scoreMessage()}</Text>
              <Button title="Try Again" buttonStyle={styles.button} onClick={() => this.setState({ currentState: TITLE_STATE, currentQuestion: 0, score: 0 })}/>
            </>
        }
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A363B',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 500,
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    marginTop: 20,
    padding: 50,
    textAlign: 'center',
    boxShadow:  'inset 20px 0px 0px 19px rgba(232,74,95,0.86)',
    borderRadius: 70
  },
  title: {
    fontSize: 48,
    fontFamily: 'Oswald',
    fontWeight: 'semibold',
    paddingBottom: 30,
    color: 'white'
  },
  text: {
    fontSize: 23,
    fontFamily: 'Helvetica',
    marginBottom: 30,
    color: '#FF847C'
  },
  button: {
    backgroundColor: '#99B898',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 15,
    fontWeight: '500',
    borderRadius: 80,
    boxShadow: '-12px 13px 3px -2px rgba(14,18,20,1)'
  }

})