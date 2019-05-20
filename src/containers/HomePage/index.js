/**
 * Created by thuatnv on 10/1/17.
 */
import React, {Component} from "react";
import HeaderPage from "../../components/HeaderPage";
import CardGirl from '../../components/CardGirl';
import {Container, Grid, Button} from 'semantic-ui-react/';
import { observer, inject } from 'mobx-react';




@inject('dataGirlsStore', 'routing')
@observer
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            girls:props.dataGirlsStore.dataGirl
        };
    }
    handleLoadMore(event){
        //console.log('event click');
        this.props.dataGirlsStore.addDataToDataGirl();
    }
    render() {
        return (
            <Container>
                <HeaderPage/>
                <Grid>
                    <Grid.Row>
                        {
                            this.state.girls.map((girl, index) => {
                                return <Grid.Column key={index} width={4}>
                                    <CardGirl
                                              isLiked={girl.isLiked !== undefined ? girl.isLiked : false}
                                              name={girl.name}
                                              link={girl.link}
                                              id={girl.id}
                                              like={girl.like}/>
                                </Grid.Column>
                            })
                        }
                    </Grid.Row>
                    <Grid.Row>
                        <Button onClick={this.handleLoadMore.bind(this)}>
                            Load More
                        </Button>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}
