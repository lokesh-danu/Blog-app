import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Modal } from '../components/Modal';
const Create = () => {
    const [title, setTitle] = useState("");
    const [disc, setDisc] = useState("");
    const [file, setFile] = useState(null);
    const [user, setUser] = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            setShowModal(true);
            // window.alert(`register or login before to continue`);
        }
    }, [user]);

    const closeModal = () => {
        setShowModal(false);
        navigate(`/register`);
    }
    const uploadFile = () => {
        if (file) {
            console.log(file);
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_SERVER_URL}/upload`,
                data: data
            }).then(res => {
                // console.log(newBlog);
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
            return filename;
        }
        return "";
    }
    
    const post = async (e) => {
        e.preventDefault();
        // console.log(title, disc, user);
        const filename = await uploadFile();
        const newBlog = {
            "title": title,
            "discription": disc,
            "userName": user.name,
            "pic": filename
        }
        console.log(newBlog);
        await axios({
            method: 'post',
            url: `${process.env.REACT_APP_SERVER_URL}/posts`,
            headers: {
                "auth-token": user.token
            },
            data: newBlog
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <Modal closeModal={closeModal} >
                Register or Login to continue.
            </Modal>
            <div className="cnt px-3 p-4 md:px-6 lg:px-8 xl:px-11  ">

                <h3 className='text-center' >Write blog Here !</h3>
                <form className='mt-2 items-stretch h-fit text-gray-700' >
                    <input type="text"
                        placeholder='title'
                        value={title}
                        onChange={e => { setTitle(e.target.value) }}
                    />
                    <textarea name="discription" id="" placeholder='Write your thoughts here !'
                        value={disc} onChange={e => { setDisc(e.target.value) }}
                        className="min-h-[55vh]"
                    >

                    </textarea>

                    <input type="file" name="" id=""
                        className='
                        file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border-none'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button className='m-auto ring-2 mt-4  border-none ring-blue-500 ring-offset-2 hover:bg-lime-400 '
                        onClick={post} >Post Blog</button>
                </form>
            </div>
        </>
    );
}

export default Create;