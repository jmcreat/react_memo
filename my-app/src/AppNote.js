import React, { Component} from 'react';
import './App.css';
import styled from 'styled-components';
import NoteList from './component/noteList';

const Container = styled.div`
    height:100vh;

`;

const AppDiv = styled.div`
    height:50vh;
    backgroud-color:#28bbf7;
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  div > span {
    font-size: 2rem;
    font-weight: bold;
  }
  div > button {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem;
    transition: 0.25s;
    color: #28bbf7;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #28bbf7;
      color: white;
    }
  }
`;

class AppNote extends Component{
  state = {
    search : '',
    notes : [
        { date: new Date(), text: '첫 번쨰 메모 테스트 ', title: '첫 번쨰 메모입니다.', edited: false},
        { date: new Date(), text: '두 번째 메모 테스트 ', title: 'second.', edited: false},
    ],
    modalToogle: false
  };

  toogleModal = () =>{
      this.setState({
          modalToogle: !this.state.modalToogle
      });
  };

  createNote = (title, text) => {
    this.setState({
      notes: [...this.state.notes,{title, text, date: new Date(), edited: false}]
    });
  };

  render(){
    return (
        
        <Container>
            <AppDiv>
                 <SearchBar>
                    <div>
                        <span>노트 만들기</span>
                    </div>
                    <div>
                        <button onClick={this.toogleModal}>노트 작성</button>
                        <div id="search-bar" />
                    </div>
                 </SearchBar>
                <NoteList notes ={this.state.notes}/>
            </AppDiv>
        </Container>
    )
  }
}
export default AppNote;