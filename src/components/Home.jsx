import React from 'react';

//imports input and display and returned
import Input from './Input.jsx';
import Display from './Display.jsx';

// useEffect(() => {
//   axios.get(`/home/${props.userName}`).then((res) => {
//     console.log('response', res);
//     const card = res.data.map(el => <Card titleInput={el.title} textInput={el.Text} />);
//   })
//     .catch((err) => console.log('err', err);
// }, []);

const Home = () => {

  return(
    <div>
      <h1>
        home?
      </h1>
      <Input/>
      <Display/>
    </div>
  )
}


export default Home;