import { Link } from 'react-router-dom';
import { IForm } from '../../types';
import '../../App.css';

export const ProfilePage: React.FC = () => {
    const user: IForm = JSON.parse(localStorage.getItem('user') || '');

    return (
        <div className="centered">
            <div className='welcom'>Здравствуйте, <b>{user.login}</b></div>

            <div style={{ textAlign: 'center' }}>
                <Link className='btnExit' to={'/'}>Выйти</Link>
            </div>
        </div>
    );
};
