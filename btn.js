import emailjs from '@emailjs/browser';
//contact form
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setForm({ ...form, [name]: value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs.send(
        'service_kqa7pls',
        'template_ivxwwxl',
        {
          from_name: form.name,
          to_name: 'Rudra',
          from_email: form.email,
          to_email: 'brahmbhattrudra212@gmail.com',
          message: form.message,
        },
        'tHSiieq3zMT4XR6XU'
        )
        .then(() => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
  
          setForm({
            name: '',
            email: '',
            message: '',
          })
        }, (error) => {
          setLoading(false)
  
          console.log(error);
  
          alert('Something went Wrong')
        })
    }
  }