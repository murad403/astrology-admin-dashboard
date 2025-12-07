"use client"
import BackButton from '@/app/componensts/button/BackButton'
import Link from 'next/link'

export const termsAndConditions: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi saepe esse omnis quo perspiciatis maxime necessitatibus est vel! Consectetur, rem recusandae. Possimus repudiandae incidunt voluptatum saepe, eaque quod nobis debitis nemo. Ducimus quam odio eveniet repudiandae dolores soluta similique perferendis aliquam iusto adipisci illum, sit dicta. Perferendis blanditiis architecto corporis explicabo aliquam culpa accusantium consequuntur magni! Tempore obcaecati soluta quos fugit. Sapiente eum consequuntur distinctio corrupti doloremque ut nulla nam necessitatibus itaque inventore vero cumque, alias tempora quaerat esse perspiciatis optio dolor quam exercitationem quibusdam iste fugit reprehenderit blanditiis. Neque voluptatum nobis quibusdam rem nisi aperiam natus placeat incidunt necessitatibus omnis iusto, veritatis eveniet, magnam harum, ad nam! Ad id quae consequuntur in sequi, quo delectus magni et vitae veritatis amet atque modi tempore minus deserunt illo veniam suscipit corrupti eaque ut, voluptatibus aliquam, iusto sunt similique! Rem illo quis nam doloremque laboriosam iure ipsum culpa quo dolore delectus iusto minus mollitia cum dolores, consectetur accusantium recusandae doloribus minima reprehenderit nemo saepe, repellat eius expedita? Cupiditate vitae minima tempora assumenda, aperiam delectus quis minus ut sed nulla rerum non reprehenderit necessitatibus repellendus quibusdam nesciunt iure velit iusto cumque laborum. Neque dolorum aperiam eos exercitationem ipsa nisi unde ullam sit sapiente."

const PrivacyPolicy = () => {
  return (
    <div>
      <div>
        <BackButton text='Terms & Conditions'></BackButton>
      </div>
      <div className='mt-3'>
        <p className='text-[16px] text-title'>{termsAndConditions}</p>
      </div>
      <div className='flex justify-end items-center mt-5'>
        <Link href={'/settings/privacy-policy/edit-terms-conditions'} className={`bg-common text-header py-2 w-1/3 rounded-lg cursor-pointer border border-border-color text-center`}>Edit</Link>
      </div>
    </div>
  )
}

export default PrivacyPolicy
