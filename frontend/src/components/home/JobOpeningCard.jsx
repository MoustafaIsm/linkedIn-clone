
function JobOpeningCard() {
    return (
        <div className="bg-white p-4 flex flex-col rounded-lg shadow-md">
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nam iure illum praesentium voluptate ducimus aspernatur, consectetur eum cumque, earum tenetur eveniet dicta non minus ipsa modi consequuntur ab reprehenderit.
                    Porro dolorum voluptates inventore quae excepturi, consequuntur nam odit repellendus fuga expedita earum fugiat eius mollitia accusantium cumque, quaerat deserunt quis autem debitis, quas et ipsum! Quae sapiente error repellendus!
                    Molestiae quis explicabo necessitatibus blanditiis ab voluptates possimus omnis delectus accusantium, laborum libero laboriosam ad, ut voluptas soluta nobis? In alias harum veritatis possimus repellat, quia perspiciatis fuga vitae hic!
                </p>
            </div>
            <div className="self-end flex gap-4">
                <button className="uppercase bg-primary-blue text-white font-bold py-2 px-5 rounded-lg hover:bg-secondary-blue hover:cursor-pointer">Applicants</button>
                <button className="uppercase py-2 px-5 border-primary-blue border-2 text-black rounded-lg hover:bg-primary-blue hover:text-white">Delete</button>
            </div>
        </div>
    )
}

export default JobOpeningCard