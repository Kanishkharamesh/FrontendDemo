// JSX
import React from "react";
import "./SlamBook.css";

const SlamBook = () => {
    const backgroundStyle = {
        backgroundImage: "url('https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "20px",
    };

    return (
        <div style={backgroundStyle}>
            <div className="slam-container">
                <div className="slam-header">
                    <span className="decor-line"></span>
                    <h1>SLAMBOOK</h1>
                    <span className="decor-line"></span>
                </div>
                <div className="slam-form">
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" className="slam-input" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nickname">Nickname:</label>
                                <input type="text" id="nickname" className="slam-input" placeholder="Enter your nickname" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <textarea id="address" className="slam-textarea" placeholder="Enter your address"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" id="phone" className="slam-input" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="memories">Memories:</label>
                                <textarea id="memories" className="slam-textarea" placeholder="Share your memories"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Gender:</label>
                                <div className="radio-group">
                                    <label><input type="radio" name="gender" value="male" /> Male</label>
                                    <label><input type="radio" name="gender" value="female" /> Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Favourite Actors:</label>
                                <div className="checkbox-group">
                                    <label><input type="checkbox" value="Rajinikanth" /> Rajinikanth</label>
                                    <label><input type="checkbox" value="Kamal Haasan" /> Kamal Haasan</label>
                                    <label><input type="checkbox" value="Vijay" /> Vijay</label>
                                    <label><input type="checkbox" value="Ajith" /> Ajith</label>
                                    <label><input type="checkbox" value="Nayanthara" /> Nayanthara</label>
                                    <label><input type="checkbox" value="Samantha" /> Samantha</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="school">School:</label>
                                <select id="school" className="slam-select">
                                    <option value="">Select your school</option>
                                    <option value="PSG Public School">PSG Public School</option>
                                    <option value="Suguna RIP School">Suguna RIP School</option>
                                    <option value="Chinmaya International School">Chinmaya International School</option>
                                    <option value="GRD Matriculation School">GRD Matriculation School</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="slam-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SlamBook;