import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Plus, 
  User, 
  BarChart3, 
  MessageSquare,
  Eye,
  Settings,
  HelpCircle,
  Zap,
  Headphones
} from 'lucide-react';

interface QuickActionsProps {
  onAddProperty: () => void;
  onEditProfile: () => void;
  onShowHelp: () => void;
  isNewUser: boolean;
  propertiesCount: number;
}

const QuickActions: React.FC<QuickActionsProps> = ({
  onAddProperty,
  onEditProfile,
  onShowHelp,
  isNewUser,
  propertiesCount
}) => {
  const actions = [
    {
      id: 'add-property',
      title: isNewUser ? 'Ongeza Nyumba ya Kwanza!' : 'Ongeza Nyumba Mpya',
      description: isNewUser ? 'Anza safari yako ya kuongeza nyumba' : 'Ongeza nyumba mpya kwenye orodha',
      icon: Plus,
      onClick: onAddProperty,
      primary: true,
      highlight: isNewUser,
      color: 'bg-primary hover:bg-primary/90'
    },
    {
      id: 'edit-profile',
      title: 'Sasisha Akaunti',
      description: 'Badilisha maelezo ya akaunti yako',
      icon: User,
      onClick: onEditProfile,
      primary: false,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'view-analytics',
      title: 'Angalia Takwimu',
      description: 'Ona utendaji wa nyumba zako',
      icon: BarChart3,
      onClick: () => console.log('Analytics clicked'),
      primary: false,
      disabled: propertiesCount === 0,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'help',
      title: 'Msaada wa Haraka',
      description: 'Wasiliana na timu yetu ya msaada',
      icon: Headphones,
      onClick: onShowHelp,
      primary: false,
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {actions.map((action) => (
        <Card 
          key={action.id}
          className={`group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
            action.highlight ? 'ring-2 ring-primary/50 animate-pulse' : ''
          } ${action.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={action.disabled ? undefined : action.onClick}
        >
          <CardContent className="p-6 text-center">
            <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
              <action.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {action.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {action.description}
            </p>
            {action.highlight && (
              <div className="mt-3">
                <div className="flex items-center justify-center text-xs text-primary font-medium">
                  <Zap className="h-3 w-3 mr-1" />
                  Anza Sasa!
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickActions;