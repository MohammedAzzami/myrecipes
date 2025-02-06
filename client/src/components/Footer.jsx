const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-gray-800 mt-24">
        <div className="w-full h-[1px] bg-lightBrown" />
        <div className="flex justify-center mt-8">
            <p className="text-sm text-white mb-10">© {currentYear} Mohammed Alazami | All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer