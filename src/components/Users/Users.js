import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allUsers } from '../../redux/actions/allUserAction'
import ModelCard from '../../components/modelCard/ModelCard'

class Users extends Component {
    componentWillMount() {
        this.props.allUsers()
    }
    render() {
        console.log('check all users check', this.props.users)
        return (
            <div className="col-sm-12">
                {
                    this.props.users.length ? this.props.users.map((itr) => {
                        return (
                            <ModelCard name={itr.name} key={itr.id}></ModelCard>
                        )
                    }) : null
                }

            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.allUsers.users
})

export default connect(mapStateToProps, { allUsers })(Users);