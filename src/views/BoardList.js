import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BoardService from './BoardService';

class BoardList extends Component {
    constructor(props){
        super(props)
//1단계
        this.state = {
            boards : []
        }
    }
//2단계
    componentDidMount(){
        BoardService.getBoards().then((res) => {
            this.setState({boards: res.data});
        });
    }

    //3단계
    render() {
        return (
            <div>
                <h2 className='text-center'>게시글 목록 조회</h2>
                <div className='row'>
                    <table className='table_list'>
                        <thead>
                            <tr>
                                <th>글번호</th>
                                <th>글제목</th>
                                <th>글내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board =>
                                    <tr key = {board.articleId}>
                                        <td>{board.articleId}</td>
                                        <td>{board.articleTitle}</td>
                                        <td>{board.articleContent}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <Link to="/">
                        <button type='button'>처음으로!</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BoardList;