import React from 'react';
import Flag from './Flag'


const images=[
  'https://www.worldometers.info/img/flags/af-flag.gif',
  'https://www.worldometers.info/img/flags/al-flag.gif',
  'https://www.worldometers.info/img/flags/ag-flag.gif',
  'https://www.worldometers.info/img/flags/an-flag.gif',
   'https://www.worldometers.info/img/flags/ao-flag.gif',
  'https://www.worldometers.info/img/flags/ac-flag.gif',
   'https://www.worldometers.info/img/flags/ar-flag.gif',
   'https://www.worldometers.info/img/flags/am-flag.gif',
   'https://www.worldometers.info/img/flags/as-flag.gif',
   'https://www.worldometers.info/img/flags/au-flag.gif',]
   
   const countries=['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria']

const Flags = () => {
  return (
    <Flag images={images} countries={countries}/>
    
  )
}

export default Flags;