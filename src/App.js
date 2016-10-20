import React from 'react';
import SearchBar from './component/SearchBar';

class App extends React.Component {

    handleTermChange(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="greeting">
                <SearchBar onTermChange={this.handleTermChange} />
            </div>
        );
    }
}

export default App;
