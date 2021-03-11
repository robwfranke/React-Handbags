import React from 'react';
import './App.css';

import Button from "./Button";
import Article from "./Article";

import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'

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

                <Article articleName="Best seller" image={bag1} alternativeText="bag1">
                </Article>

                <Article articleName="Best seller" image={bag2} alternativeText="bag2">
                </Article>

                <Article articleName="New Collection" image={bag3} alternativeText="bag3">
                </Article>

                <Article articleName="New Collection" image={bag4} alternativeText="bag4">
                </Article>




            </main>


        </>


    );
}

export default App;



