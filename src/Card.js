// Card.js
import React from 'react';

const Card = ({ userData }) => {
    return (
        <div className="profile-card bg-gradient-to-r from-blue-600   to-purple-600 p-6 rounded-lg shadow-lg max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img
                        src={userData.picture.large}
                        alt="User"
                        className="w-20 h-20 rounded-full border-4 border-white object-cover "
                    />
                    <div className="ml-4">
                        <h2 className="text-2xl font-bold text-white">
                            {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
                        </h2>
                        <p className="text-sm text-white">{`@${userData.login.username}`}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="text-white">
                    <span className="font-bold">Age</span>: {userData.dob.age}
                </div>
                <p className="text-white">
                    <span className="font-bold">Cell</span>: {userData.cell}
                </p>
                <p className="text-white">
                    <span className="font-bold">Email</span>: {userData.email}
                </p>
                <p className="text-white">
                    <span className="font-bold">Phone</span>: {userData.phone}
                </p>
                <p className="text-white">
                    <span className="font-bold">Nationality</span>: {userData.nat}
                </p>
                <p className="text-white">
                    <span className="font-bold">{userData.location.city}</span>,{' '}
                    {userData.location.country}
                </p>
            </div>
        </div>
    );
};

export default Card;
