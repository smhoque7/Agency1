import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuote } from '../../contexts/QuoteContext';
import { User, Heart, Target, DollarSign, Clock, CheckCircle } from 'lucide-react';

interface QuoteFormProps {
  onSubmit: () => void;
}

const QuoteForm = ({ onSubmit }: QuoteFormProps) => {
  const { quoteData, setQuoteData, isFormComplete } = useQuote();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: quoteData
  });

  const watchedValues = watch();
  
  React.useEffect(() => {
    setQuoteData(watchedValues);
  }, [watchedValues, setQuoteData]);

  const handleFormSubmit = () => {
    if (isFormComplete) {
      onSubmit();
    }
  };

  const primaryGoalOptions = [
    'Family protection',
    'Debt coverage',
    'Income replacement',
    'Estate planning',
    'Business protection',
    'Other'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
        {/* Age Input */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <label htmlFor="age" className="text-lg font-semibold text-gray-900">
              What's your age?
            </label>
          </div>
          <div className="ml-12">
            <input
              id="age"
              type="number"
              min="18"
              max="85"
              {...register('age', { required: 'Age is required', min: 18, max: 85 })}
              className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="35"
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
            )}
          </div>
        </div>

        {/* Gender Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <User className="h-5 w-5 text-green-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Gender
            </label>
          </div>
          <div className="ml-12 grid grid-cols-3 gap-3">
            {['male', 'female', 'other'].map((gender) => (
              <label key={gender} className="relative cursor-pointer">
                <input
                  type="radio"
                  value={gender}
                  {...register('gender', { required: 'Gender selection is required' })}
                  className="sr-only"
                />
                <div className={`p-3 border-2 rounded-lg text-center font-medium transition-all ${
                  watchedValues.gender === gender
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}>
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </div>
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm ml-12">{errors.gender.message}</p>
          )}
        </div>

        {/* Smoking Status */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Heart className="h-5 w-5 text-red-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Smoking Status
            </label>
          </div>
          <div className="ml-12 space-y-2">
            {[
              { value: 'never', label: 'Never smoked' },
              { value: 'former', label: 'Former smoker (quit 12+ months ago)' },
              { value: 'current', label: 'Current smoker' }
            ].map((option) => (
              <label key={option.value} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value={option.value}
                  {...register('smokingStatus', { required: 'Smoking status is required' })}
                  className="mr-3 h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.smokingStatus && (
            <p className="text-red-500 text-sm ml-12">{errors.smokingStatus.message}</p>
          )}
        </div>

        {/* Coverage Amount */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Coverage Amount
            </label>
          </div>
          <div className="ml-12">
            <div className="mb-4">
              <input
                type="range"
                min="100000"
                max="2000000"
                step="50000"
                {...register('coverageAmount')}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer progress-bar"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$100K</span>
                <span className="font-semibold text-lg text-gray-900">
                  ${(watchedValues.coverageAmount || 500000).toLocaleString()}
                </span>
                <span>$2M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Length */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Coverage Length
            </label>
          </div>
          <div className="ml-12">
            <div className="mb-4">
              <input
                type="range"
                min="10"
                max="30"
                step="5"
                {...register('coverageLength')}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer progress-bar"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>10 years</span>
                <span className="font-semibold text-lg text-gray-900">
                  {watchedValues.coverageLength || 20} years
                </span>
                <span>30 years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Goals */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Target className="h-5 w-5 text-teal-600" />
            </div>
            <label className="text-lg font-semibold text-gray-900">
              Primary Goals (Select all that apply)
            </label>
          </div>
          <div className="ml-12 grid grid-cols-2 gap-3">
            {primaryGoalOptions.map((goal) => (
              <label key={goal} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={goal}
                  {...register('primaryGoals', { required: 'Select at least one goal' })}
                  className="mr-3 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-gray-700">{goal}</span>
              </label>
            ))}
          </div>
          {errors.primaryGoals && (
            <p className="text-red-500 text-sm ml-12">{errors.primaryGoals.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={!isFormComplete}
            className={`w-full py-4 px-6 rounded-lg font-semibold transition-all ${
              isFormComplete
                ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } flex items-center justify-center gap-2`}
          >
            {isFormComplete && <CheckCircle className="h-5 w-5" />}
            Get My Personalized Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;