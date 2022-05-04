import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-5 p-4 '>
            <h1 className='mt-5 text-center mb-5'>Question and Answer</h1>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header > <h6>Question-1: Difference between javascript and node.js ?</h6> </Accordion.Header>
                    <Accordion.Body>
                        {/* bootstrap  table  */}
                        <Table striped bordered hover className='table-style' variant="">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Javascript</th>
                                    <th>Node.js</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Javascript is a programming language that is used for writing script on the website</td>
                                    <td>Node.js is a javascript runtime environment</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>It is basically used on the client-side.</td>
                                    <td>It is mostly used on the server-side</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Javascript can only be run in the browsers</td>
                                    <td>We can run Javascript outside the browser with the help of node.js</td>

                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Javascript is used in frontend development</td>
                                    <td>Node.js is used in server-side development</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>It is capable enough to add HTML and play with the DOM</td>
                                    <td>It is does not have capability to add HTML tags </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++</td>
                                    <td>Node.js is written in C, C++ and Javascript</td>
                                </tr>

                            </tbody>
                        </Table>



                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h6>Question-2:Differences between sql and nosql databases.</h6> </Accordion.Header>
                    <Accordion.Body>
                        {/* bootstrap  table  */}
                        <Table striped bordered hover className='table-style' variant="">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>sql</th>
                                    <th>nosql</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>(RDBMS) Relational database management system</td>
                                    <td>Non-relational or distributed database system</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>These databases have fixed or static or schema</td>
                                    <td>They have dynamic schema</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Vertically Scalable</td>
                                    <td>Horizontally scalable</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>These database are best suited for complex queries</td>
                                    <td>These databases are not so good for complex queries</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Follows ACID property</td>
                                    <td>Follow CAP </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h6>Question-2:When should we use Node.js & when should we use mongoDB</h6> </Accordion.Header>
                    <Accordion.Body>
                        When should we use Nodejs?
                        Nodejs is such a tool for the Javascript programming language.
                        So, if you want to write some kind of stand-alone program or server in Javascript, then you can use node.js for it.
                        When should we use MongoDB?
                        If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> <h6>Question-2:Differences between sql and nosql databases.</h6> </Accordion.Header>
                    <Accordion.Body>
                        Answer bosbe

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;