import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    
    componentWillMount() {
        this.props.fetchPosts();    
    }
    
    render() {
        return (
            <div>List of blog posts</div>
        );
    }
}

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts},dispatch);
}*/

//fetchPosts:fetchPosts is equivalent to define mapDispatchToProps and use as a function parameter
//fetchPosts:fetchPosts can be refactored as {fetchPosts}
export default connect(null, {fetchPosts})(PostsIndex);