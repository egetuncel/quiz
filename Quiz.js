import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import database from '@react-native-firebase/database'

export default function Quiz ({navigation}) {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [nextQuestionVisible, setNextQuestionVisible] = useState(false);
    const [resultVisible, setResultVisible] = useState(false);
    const [score, setScore] = useState(0);

    const ClosePage = () => {
        navigation.goBack();
      }

    const transformToArray = (questions) => Object.keys(questions).map((key) => ({
        id: key,
        ...questions[key]

}));

   
    

    const getAllQuestion = async () => {

            
            const snapshot = await database().ref("Quiz1/").once("value");
            
            const questions = transformToArray(snapshot.val());
            
            return questions;
        
    }

    const getRandomQuestions = async () => {
        const questions = await getAllQuestion();
        

        return questions.map(question => ({
            ...question,
            choices: question.choices
        }))


    }

    useEffect (() => {
        const fetchQuestions = async () => {
        const questions = await getRandomQuestions();
        setQuestions(questions);

        };
        fetchQuestions();
          
    }, [])

    const selectAnswer = (choiceId) => {
        if (currentQuestion.correct === choiceId) {
            setScore(score + 1);
        }
        if (currentQuestionIndex +1 !== questions.length) {
            setNextQuestionVisible(true);
        } else {
            setResultVisible(true);
        }
    }

    const Question = ({ data, currentQuestionIndex, selectAnswer}) => {

        const [selectedChoice, setSelectedChoice] = useState();
        const [disableChoices, setDisableChoices] = useState(false);

        useEffect(() => {
            setSelectedChoice(null);
            setDisableChoices(false);
        }, [data]);

        const onChoiceSelect = (choice) => {
            setSelectedChoice(choice.id);
            selectAnswer(choice.id);
            setDisableChoices(true);
        };

        const renderChoice = (choice, index) => {
            let abc = '';
            if(selectedChoice === choice.id) {
                abc = choice.id === data.correct ? styles.correctAnswer : styles.wrongAnswer;
            }
            if (selectedChoice && choice.id === data.correct) {
                abc = styles.correctAnswer;
            }
            return (
                <Text 
                 onPress={() => onChoiceSelect(choice)}
                style={abc}
                disabled={disableChoices}
                key={choice.id}
                >
                    {choice.text}
              
                </Text>
            )
        }

        if(!data) {
            return null;
        }
     
        return(
           
            <View style = {styles.container}>
                <View style= {styles.viewStyle}>
                    <Text>
                        {currentQuestionIndex}) {data.question}  
                    </Text>
                
                </View>
                <View style= {styles.viewStyle}>
                   <TouchableOpacity>
                        {data.choices.map((choice, index) => renderChoice(choice, index))}  
                    </TouchableOpacity>
                
                </View> 
                    
            </View>
        )
    }
    
    const renderQuizResults = () => {
        if (resultVisible) {
            const percentage = ((score / questions.length) * 100).toFixed(1);
            return(
                <View>
                    <Text>
                        {score} out of {questions.length} ({percentage}%)
                    </Text>
                </View>
            )
        }
    }

    const nextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setNextQuestionVisible(false);
    }

    const renderNextQuestionButton = () => {
        if (!nextQuestionVisible) {
            return null;
        }

        return (
            <Text onPress={nextQuestion}>
                Next Question
            </Text>
        )
    }

    const currentQuestion = questions[currentQuestionIndex];
    

        return (
            <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
                <TouchableOpacity style={{ marginHorizontal: 15, marginTop: 50 }} onPress={ClosePage}>
                    <Icon name="chevron-back-outline" size={35}></Icon>
                </TouchableOpacity>
                
                 <Question data={currentQuestion} selectAnswer={selectAnswer} currentQuestionIndex={currentQuestionIndex + 1}></Question>
                 {renderNextQuestionButton()}
                 {renderQuizResults()}
            </SafeAreaView>
        )
    
}

const styles = StyleSheet.create ({
container: {
    flexDirection: "column",
    paddingHorizontal: 20,
    
    marginTop: 32,
},
viewStyle : {
    overflow: "hidden",
    borderColor: "#ddd",
    borderWidth: 0.5,
    borderRadius: 20,
    height: "auto",
    width: "auto",
    flexDirection:"column",
    backgroundColor: "#00cca3",
    alignItems:"center",
    marginVertical: 10,
    
},
textStyle : {
    fontSize:17,
    fontWeight:"400",
   backgroundColor:"black",
    color: "black"
},
correctAnswer : {
    
    backgroundColor:"purple",
    
},
wrongAnswer : {
    backgroundColor:"red",
    
   
},



})