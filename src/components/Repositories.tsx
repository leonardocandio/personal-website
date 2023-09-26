import React, {Component, RefObject} from 'react';

interface Repository {
    name: string,
    description: string
}

interface IProps {
    compRef: RefObject<any>
}

interface IState {
    repositories: Repository[];
}

class Repositories extends Component<IProps, IState> {

    constructor(props: IProps | Readonly<IProps>) {
        super(props);
        this.state = {repositories: []}
    }

    async getRepositories(): Promise<Repository[]> {
        return fetch("https://api.github.com/users/leonardocandio/repos").then((res => res.json()))
    }

    async componentDidMount() {
        this.setState({repositories: await this.getRepositories()})
    }

    render() {
        let id = 0;
        return (
            <div ref={this.props.compRef}>
                {this.state.repositories.map((repo: Repository) => (
                    <div key={id++}>
                        {repo.name} <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        {repo.description}
                    </div>
                ))}
            </div>
        );
    }
}

export default Repositories;