import styled from 'styled-components'
import { Animated } from 'react-native'

export const Container = styled.SafeAreaView`
    background-color: #121212;
    flex:1;
`


export const Hero = styled.View`
    height: 40%;
    width: 100%;
    align-items: center;

`

export const Heading = styled.View`
        height: 10%;
        width: 100%;
        align-items: center;
        flex-direction: row;
       
`

export const HeadingText = styled.Text`
    margin-left:3%;
    margin-top:5%;
    font-size:30px;
    color: white;
    font-family: Poppins;
    
`
export const Title = styled.View`
    height: 20%;
    width: 100%;

`

export const TitleText = styled.Text`

    font-size: 35px;
    font-weight: bold;
    color: white;
    margin-left: 10%;
    font-family: Poppins;
`

export const SubText = styled.Text`
    font-family: Poppins;
    font-size: ${props => props.bold ? ('20px') : ('18px')};
    color: ${props => props.bold ? ('#F50057') : ('grey')};
    margin-left: ${props => props.margin ? ('2%') : ('15%')};

`

export const ButtonText = styled.Text`

    font-family: Poppins;
    font-size: 24px;
    text-align: center;
    margin:${props => props.mr ? (props.mr) : ('5%')};
    color:white;
    width:${props => props.wd ? (props.wd) : ('90%')};

`


export const ButtonContainer = styled.View`
    
    height: ${props => props.height ? (props.height) : ('20%')};
    margin: 20px;
    justify-content: ${props => props.space ? ('space-between') : ('flex-start')};
    align-items: center;
   
    
`


export const Button = styled.TouchableOpacity`
    margin:${props => props.m ? (props.m) : (0)};
    border-radius: 10px;
    width: ${props => props.width ? (props.width) : ('90%')};
    height: ${props => props.height ? (props.height) : ('65px')};
    background-color: ${props => props.color};
    text-align: center;

`


export const TextContainer = styled.View`
    background-color: ${props => props.color ? (props.color) : ('#121212')} ;
    border-color: #555454;
    border-width: 3px;
    flex-direction: row;
    border-radius: 15px;
    justify-content: space-between;
    height: ${props => props.height ? (props.height) : ('10%')};
    width: ${props => props.width ? (props.width) : ('85%')};
    margin:8%;
    margin-left: ${props => props.ml ? (props.ml) : ('8%')};
    align-items: center;
    

`


export const TextInput = styled.TextInput`

    font-size: 20px;
    font-family: Poppins;
    width: 69%;
    margin-left: 20px;

`

export const Icon = styled.View`
    width: ${props => props.width ? (props.width) : ('40px')};
    align-items: center;

    margin-right:${props => props.mr ? (props.mr) : (0)};
    

`

export const Options = styled.View`
    flex-direction: row;
    height: 7%;
    width: 100%;
    justify-content: center;
    align-items: center;

`


export const ForgotPassword = styled.TouchableOpacity`
    height: 50%;
    width: 42%;
   

`

export const FooterContainer = styled.View`

    height: 10%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    
`

export const Icons = styled.View`

    height: 40%;
    width: 50%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;

`


export const Circle = styled.View`
    height: ${props => props.width ? (props.width) : ('38px')};
    width: ${props => props.width ? (props.width) : ('38px')};
    border-radius: 50px;
    background-color: ${props => props.color ? (props.color) : ('white')};
    justify-content: center;
    align-items: center;
    margin-left: ${props => props.ml ? (props.ml) : ('0')};
    margin-top: ${props => props.mt ? (props.mt) : ('0')};

`


export const FooterText = styled.Text`

    font-family: Poppins;
    font-size: ${props => props.bold ? ('18px') : ('15px')};
    color: ${props => props.bold ? ('#F50057') : ('grey')};
    margin-left: ${props => props.margin ? (0) : ('15%')};

`


export const FloatingButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 50px;
    right: 30px;
    align-items: center;
    justify-content: center;
    background-color: #F50057;
    height: 60px;
    width: 60px;
    border-radius: 60px;

`
export const ModalBackGround = styled.View`

    flex:1;
    flex-direction: row;
    background-color: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: flex-start;



`

export const ModalContainer = styled.View`
    height: 54%;
    width: 85%;
    padding: 20px 30px 30px 30px;
    background-color: #121212;
    border-radius: 10px;
    margin-top: 80px;
 
`

export const NewPassword = styled.View`

    height: 80%;
    width: 100%;
  
`


export const SideModal = styled.View`

    width:40%;
    height: 10%;
    position: absolute;
    bottom:10%;
    right:0;
  
`

export const DeleteContainer = styled.View`
    justify-content: space-evenly;
    height: 22%;
    width: 80%;
    padding: 20px 30px 30px 30px;
    background-color: #121212;
    border-radius: 20px;
    margin-top: 80%;

`


// Skeleton Components and Animation 

Animated.timing()


export const HeadingSk = styled.View`
        height: 10%;
        width: 100%;
        align-items: center;
        flex-direction: row;
       
`

export const HeadingTextSk = styled.Text`
    margin-left:3%;
    margin-top:5%;
    font-size:30px;
    color: white;
    font-family: Poppins;
`

export const CircleSk = styled.View`
    height: ${props => props.width ? (props.width) : ('38px')};
    width: ${props => props.width ? (props.width) : ('38px')};
    border-radius: 50px;
    background-color: ${props => props.color ? (props.color) : ('white')};
    justify-content: center;
    align-items: center;
    margin-left: ${props => props.ml ? (props.ml) : ('0')};
    margin-top: ${props => props.mt ? (props.mt) : ('0')};

`

export const TextInputSk = styled.TextInput`

    font-size: 20px;
    font-family: Poppins;
    width: 69%;
    margin-left: 20px;

`

