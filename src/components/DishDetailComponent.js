import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 
'reactstrap';

class DishDetail extends Component{
   

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null){
            const returnComments= dish.comments.map((com)=>{
                console.log(com.comment);
                 return (
                    <div key={com.id}>
                        {com.comment}
                        <p> -- {com.author} , {com.date}</p>
                    </div>
                                      

                    );

            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>

                    <p>{returnComments}</p>
                </div>
                );
        }
        else{
            return(
                <div></div>
                );
            }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                         {this.renderDish(this.props.selectedDish)}
                    </div>

                         {this.renderComments(this.props.selectedDish)}
 
                </div>
            </div>
        )

    }
}

export default DishDetail;