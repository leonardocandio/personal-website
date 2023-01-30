import React from 'react';
import styles from './App.module.css';
import Navbar from "./Navbar";
import Main from "./Main";

interface Repositories {
    repositories: Repository [];
}

interface Repository {
    "id": number;
    "node_id": string;
    "name": string;
    "full_name": string;
    "private": false;
    "owner": RepositoryOwner;
    "html_url": string;
    "description": string;
    "fork": boolean;
    "url": string;
    "created_at": string;
    "updated_at": string;
    "pushed_at": string;
    "size": number;
    "stargazers_count": number;
    "watchers_count": number;
}

interface RepositoryOwner {

    "login": string;
    "id": number;
    "node_id": string;
    "avatar_url": string;
    "url": string;
    "type": string;
}

function App() {

    return (
        <div className={styles["App"]}>
            <Navbar/>
            <Main/>
        </div>
    )
}


export default App;
