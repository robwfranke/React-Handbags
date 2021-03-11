import React from 'react';
import './App.css';

import Button from "./Button";
import Article from "./Article";

import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'


function App() {
    return (
        <>


            <h1>Handbags & Purses</h1>


            <nav>

                <Button state={false} textButton={"to the collection"}>
                </Button>


                <Button state={false} textButton={"shop all bags"}>
                </Button>


                <Button state={true} textButton={"pre-orders"}>
                </Button>


            </nav>

            <main>

                {/* articleNameSelection:
                articleNameSelection = 1   "Best seller"
                articleNameSelection = 2   "New Collection"

                */}

                <Article
                    articleName="Best seller"
                    image={bag1}
                    alternativeText="bag1"
                    typeOfBag="handy"
                    price="400,-">
                </Article>

                <Article
                    articleName="Best seller"
                    image={bag2}
                    alternativeText="bag2"
                    typeOfBag="handy"
                    price="250,-">
                </Article>

                <Article
                    articleName="New Collection"
                    image={bag3}
                    alternativeText="bag3"
                    typeOfBag="handy"
                    price="300,-">
                </Article>

                <Article
                    articleName="New Collection"
                    image={bag4} alternativeText="bag4"
                    typeOfBag="handy"
                    price="150,-">
                </Article>


            </main>


            <footer>

                <section>
                        <h2>The Brand</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate doloremque
                            excepturi explicabo facere fugiat itaque sapiente tempore veniam voluptatibus!
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate doloremque
                            excepturi explicabo facere fugiat itaque sapiente tempore veniam voluptatibus!
                        </p>


                </section>


                <section>

                    <img
                        src={brand}
                        alt="brand"/>
                </section>


                <section>

                    <img
                        src={our_story}
                        alt="our_story "/>
                </section>



                <section>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus enim est facere
                        inventore, maxime neque qui quia quibusdam quidem quos ratione repellat rerum suscipit,
                        tempore velit vitae voluptate, voluptatum!
                    </p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus enim est facere
                        inventore, maxime neque qui quia quibusdam quidem quos ratione repellat rerum suscipit,
                        tempore velit vitae voluptate, voluptatum!
                    </p>


                </section>


            </footer>


        </>


    );
}

export default App;



