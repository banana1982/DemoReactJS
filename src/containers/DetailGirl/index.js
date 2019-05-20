/**
 * Created by thuatnv on 10/4/17.
 */
import React, {Component} from "react";
import HeaderPage from "../../components/HeaderPage";
import {Container, Grid, Header,Image} from 'semantic-ui-react/';
import {observer, inject} from 'mobx-react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

@inject('girlDetailStore')
@observer
export default class GirlDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:props.girlDetailStore.dataDetail[0].name,
            dataDetail: props.girlDetailStore.dataDetail[0].data_detail,
            id:this.props.match.params.id
        };
        const parsed = queryString.parse(props.location.search);
        console.log(parsed);
    }
    goBack = () =>{
        this.props.history.goBack();
    }
    render () {
        return(
            <Container>
                <HeaderPage/>
                <Header as='h4'>{this.state.title}</Header>
                {this.state.id}
                {this.state.dataDetail.map((detail,index) => {return <Image
                    src={detail}
                    size='large'
                    as="img"
                    key={index}
                />} ) }
                <button onClick={this.goBack}>Quay lại</button>
            </Container>
        )
    }
}