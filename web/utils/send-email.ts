import { FormData } from '@/components/ContactForm';

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api';

  await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      return(response.message);
    })
    .catch((err) => {
      return(err);
    });
}
