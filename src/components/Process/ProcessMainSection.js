import MarginWrapper from "@/components/wrappers/sectionWrapper";

export default function ProcessMainSection() {
  return (
    <MarginWrapper top={96} bottom={96}>
      <div className="w-full max-w-[1597px] mx-auto relative">
        {/* Main Container */}
        <div 
          className="flex flex-col gap-[30px] pl-[30px]" 
          
        >
              <h2 
                className="font-barlow font-semibold text-left text-white mt-[20px]"
                style={{ 
                  fontSize: '48px', 
                  lineHeight: '100%', 
                  letterSpacing: '0%' 
                }}
              >
                At Codroon
              </h2>
              <p 
                className="font-barlow font-normal text-left text-white"
                style={{ 
                  fontSize: '18px', 
                  lineHeight: '150%', 
                  letterSpacing: '-0.6%' 
                }}
              >We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
              </p>
            
            {/* Button */}
            <button 
              className="text-white font-barlow font-semibold transition-all duration-200 flex items-center justify-center rounded-[30px]"
              style={{ 
                width: '420px', 
                height: '50px', 
                paddingTop: '12px', 
                paddingRight: '14px', 
                paddingBottom: '12px', 
                paddingLeft: '14px', 
                gap: '10px',
                backgroundColor: '#57BB6D'
              }}
            >
            Here's an overview of our typical process:
            </button>
        </div>
      </div>
    </MarginWrapper>
  );
}
