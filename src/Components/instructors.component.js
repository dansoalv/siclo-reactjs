import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import '../CSS/instructors.css'
import {getInstructorsList} from "../Actions/siclo.actions";

const InstructorsComponent = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        const loadInstructors = () => dispatch(getInstructorsList(1,10))
        loadInstructors()
    }, [])

    const instructorsList = useSelector(state => state.Siclo.instructors)
    const totalPages = useSelector(state => state.Siclo.totalPages)
    const error = useSelector(state => state.Siclo.error)

    const getMoreInstructors = (page) => {
        const loadInstructors = () => dispatch(getInstructorsList(page,10))
        loadInstructors()
    }

    return (
        <React.Fragment>
            <div className="box-container-title">
                <div className="row">
                    <div className="col text-center">
                        <h1>Instructores Siclo+</h1>
                    </div>
                </div>


                <section className="instructors">
                <div className="instructors__container" >
                    {instructorsList.map( instructor => (
                        <div className="instructors-item" key={instructor.nombre}>
                            <img className="instructors-item__img" src={instructor.face_photo} alt=""/>
                            <div className="instructors-item__details">
                                <p className="instructors-item__details--title">{instructor.nombre}</p>
                                {instructor.interest !== null &&
                                    <p className="instructors-item__details--subtitle">{instructor.interests === null ? " " : instructor.interests.music  }</p>
                                }
                            </div>
                        </div>
                    ))}
                </div>
        </section>


    <nav aria-label="Page navigation siclo">
            <ul className="pagination justify-content-center">
                {
                    totalPages.map( item => (
                        <li className="page-item page-link" onClick={() => getMoreInstructors(item)} key={item}>{item}</li>
                    ))
                }
            </ul>
        </nav>
    </div>


</React.Fragment>
    );
}

export default  InstructorsComponent
