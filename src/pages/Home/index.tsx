import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    return (
        <> 
            <div onClick={
                () => {
                    navigate('/login');
                } 
            }>Home</div>
        </>
    );
};

export default Home;
