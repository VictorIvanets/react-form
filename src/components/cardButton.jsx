// eslint-disable-next-line react/prop-types
export function CardButtom({children, ...props}) {

    return  <>

<button {...props} className="cardbtn">
        {children}
</button>

      </>;
    
  }