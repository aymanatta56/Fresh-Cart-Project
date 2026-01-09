import NotFoundimg from'../../images/error.svg'

export default function NotFound() {
  return (
    <div className='mt-24 flex justify-center items-center'>
        <img src={NotFoundimg} alt="Not Found" />
    </div>
  )
}
