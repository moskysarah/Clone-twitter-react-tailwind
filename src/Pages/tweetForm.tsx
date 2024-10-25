import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../api/axios';

interface TweetFormData {
  content: string;
}

const TweetForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TweetFormData>();

  const onSubmit = async (data: TweetFormData) => {
    try {
      await api.post('/tweets', {
        ...data,
        author: 'CurrentUser', // À remplacer par l'utilisateur actuel
        createdAt: new Date().toISOString(),
      });
      reset();
      // Vous pouvez ajouter ici une logique pour mettre à jour la liste des tweets
    } catch (error) {
      console.error('Erreur de tweet, error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register('content', { 
          required: 'Le contenu du tweet est requis',
          maxLength: {
            value: 180,
            message: 'Le tweet ne doit pas dépasser 180 caractères'
          }
        })}
        placeholder="Quoi de neuf ?"
      />
      {errors.content && <p>{errors.content.message}</p>}
      <button type="submit">Tweeter</button>
    </form>
  );
};

export default TweetForm;