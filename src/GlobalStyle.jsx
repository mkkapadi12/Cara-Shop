import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  font-size: 4.5rem;
  font-weight: 900;
}

 h2 {
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.5rem;
  font-weight: 300;
}

p, button {
  font-size: 1rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
  color: #7f7070;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: auto 30px;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
  grid-template-columns: 1.8fr .8fr .6fr 1.3fr;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

@media (max-width: 998px) {
  .container {
    max-width: 130rem;
    margin: 0px 12px;
    padding: 0px;
  }
  
  .grid{
    gap: 2.2rem;
  }
  .grid-two-column , 
  .grid-three-column, 
  .grid-four-column{
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 766px) {
      .grid{
          gap: 1.2rem;
      }
      .grid-two-column , 
      .grid-three-column, 
      .grid-four-column{
          grid-template-columns: 1fr;
      }
    }

`;
