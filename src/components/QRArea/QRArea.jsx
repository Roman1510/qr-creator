import { QRCodeSVG } from 'qrcode.react'

const QRArea = ({ string }) => {
  return (
    <div>
      <QRCodeSVG
        value={string}
        size={512}
        bgColor={'#ffffff'}
        fgColor={'#660e86'}
        level={'L'}
        includeMargin={true}
      />
    </div>
  )
}

export default QRArea
