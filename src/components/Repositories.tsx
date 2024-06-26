import React, {Component, RefObject} from 'react';
import "../styles/Repositories.css"

interface Repository {
    name: string,
    description: string,
    html_url: string
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
            <div ref={this.props.compRef} className={"repositories"}>
                <h2 className={"repositories-title"}>open source</h2>
                <p>here you can find all of the open source projects i've published on my <a href={"https://github.com/leonardocandio"}>github page</a> (including the code to this page)</p>
                <div className={"repositories-container"}>
                    {this.state.repositories.map((repo: Repository) => (
                        <div key={id++} className={"repositories-card"}>
                            <a href={repo.html_url}> {repo.name}</a>
                            {repo.description}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Repositories;