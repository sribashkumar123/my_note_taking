import './Radiobtn.css';
export default function Radiolist() {
    return (

        <>
          
            

  <div class="radio-group">
    <label class="radio-item">
      <input type="radio" name="color" value="red"/>
      <span class="radio-custom red"></span>
      
    </label>
    <label class="radio-item">
      <input type="radio" name="color" value="blue"/>
      <span class="radio-custom blue"></span>
     
    </label>
    <label class="radio-item">
      <input type="radio" name="color" value="green"/>
      <span class="radio-custom green"></span>
      
    </label>
    <label class="radio-item">
      <input type="radio" name="color" value="yellow"/>
      <span class="radio-custom yellow"></span>
      
    </label>
    <label class="radio-item">
      <input type="radio" name="color" value="purple"/>
      <span class="radio-custom purple"></span>
      
    </label>
    <label class="radio-item">
      <input type="radio" name="color" value="orange"/>
      <span class="radio-custom orange"></span>
     
    </label>
    
  </div>



        </>
    );
}