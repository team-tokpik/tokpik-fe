import * as styles from './ScrapModalContent.css'
import Square from '@/components/Square/Square'
import Plus from '/public/images/FilterInputPlus.svg'
interface ScrapModalContentProps {
    isInput: boolean;
    colorSet: [string | undefined, string | undefined, string | undefined, string | undefined];
    title: string;
    isAdding?: boolean;
    onClick: (e: React.MouseEvent) => void;
    handleEnter?: (title:string) => void;
  }

const ScrapModalContent = ({isInput,colorSet,title, isAdding, onClick, handleEnter}: ScrapModalContentProps) => {

  return (
    <div className={styles.Container} onClick={onClick}>
        {isInput ? (
             <>                
            <div className={styles.SquareContainer}>
                <Plus color='#777777' className={styles.PlusWrapper} />
            </div>
            {!isAdding ? <p style={{color:'#777777'}}>{title}</p> : 
            <input 
              style={{all:'unset',color:'#fafafa'}}
              type='text' 
              autoFocus
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter' && handleEnter && e.currentTarget instanceof HTMLInputElement) {
                  handleEnter(e.currentTarget.value);
                 
                }
              }}
            />}
             </>
        ) : (
            <>
                <div className={styles.SquareContainer} >
                <Square color={colorSet[0]} />
                <Square color={colorSet[1]} className={styles.Square2}/>
                <Square color={colorSet[2]} />
                <Square color={colorSet[3]} />
                </div>
                <p style={{color:'#fafafa'}}>{title}</p>
            </>
        )}
    
         </div>
  )
}

export default ScrapModalContent    