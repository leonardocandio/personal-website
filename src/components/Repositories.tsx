import React, {Component} from 'react';

interface Repository {
    name: string
}

interface IProps {
}

interface IState {
    repositories: Repository[];
}

class Repositories extends Component<IProps, IState> {


    async getRepositories(): Promise<Repository[]> {
        return fetch("https://api.github.com/users/leonardocandio/repos").then((res => res.json()))
    }

    async componentDidMount() {
        this.setState({repositories: await this.getRepositories()})
    }

    render() {
        return (
            <div>
                {this.state && this.state.repositories.map((repo: Repository) => (
                    <div>
                        {repo.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default Repositories;