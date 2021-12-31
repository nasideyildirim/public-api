export default function Card(props){
   
    return <>
        
                    <div className="card mt-2 ">
                      <div className="card-body">
                        <h1 className="mt-2 "> <strong>Name:</strong> {props.data.name}</h1>
                        <hr />
                        <p className="card-subtitle mb-2 ">
                          <strong>Status: </strong>
                          {props.data.status}
                        </p>
                        <p className="card-title">
                          <strong>Species:</strong> {props.data.species}
                        </p>
                        <p className="card-text">
                          <strong>Gender: </strong>
                          {props.data.gender}
                        </p>
                        <img src={`${props.data.image}`}alt="" className='w-100'/>
                      </div>
                    </div>
               
    </>
  }