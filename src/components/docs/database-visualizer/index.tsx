import Mermaid from '@theme/Mermaid';
const DataVisualizer = () => {
  return (
    <Mermaid
      value={`
          erDiagram
    User ||--o{ UserAvatar : has
    User ||--o{ User_Token : has
    User ||--o{ Desk : owns
    Desk ||--o{ Vocab : contains
    Vocab ||--o{ Vocab_Example : has
    Desk ||--o{ Flashcard : contains
    Flashcard ||--|| Spaced_Repetition : has

    User {
        int user_id PK
        varchar user_name
        char user_uuid
        varchar user_email
        varchar user_password
        text user_avatar
        text user_thumbnail
        enum user_provider
        timestamp created_at
        timestamp update_at
    }

    UserAvatar {
        int user_avatar_id PK
        int user_id FK
        enum sex
        varchar face_color
        enum ear_size
        varchar hair_color
        enum hair_style
        varchar hat_color
        enum hat_style
        enum eye_brow
        enum eye_style
        enum glasses_style
        enum nose_style
        enum mouth_style
        enum shirt_style
        varchar shirt_color
        varchar bg_color
        text gradient_bg_color
        timestamp created_at
        text user_avatar_url
    }

    User_Token {
        int UT_id PK
        enum UT_type
        timestamp UT_expired_at
        text UT_text
        int UT_user_id FK
    }

    Desk {
        int desk_id PK
        text desk_description
        text desk_thumbnail
        text desk_icon
        enum desk_status
        varchar desk_name
        boolean desk_is_public
        int desk_owner_id FK
        timestamp created_at
        timestamp update_at
    }

    Vocab {
        int vocab_id PK
        varchar vocab_language
        varchar vocab_meaning
        text vocab_image
        varchar vocab_text
        int vocab_desk_id FK
        timestamp created_at
        timestamp update_at
    }

    Vocab_Example {
        int VE_id PK
        text VE_text
        int VE_vocab_id FK
        timestamp created_at
        timestamp update_at
    }

    Flashcard {
        int flashcard_id PK
        text flashcard_front_image
        text flashcard_front_sound
        text flashcard_front_text
        text flashcard_back_image
        text flashcard_back_sound
        text flashcard_back_text
        int flashcard_vocab_id FK
        int flashcard_desk_id FK
        timestamp created_at
        int flashcard_desk_position
        timestamp updated_at
    }

    Spaced_Repetition {
        int spaced_repetition_id PK
        enum spaced_repetition_name
        int spaced_repetition_count
        float spaced_repetition_easiness_factor
        float spaced_repetition_interval
        date spaced_repetition_next_day
        int spaced_repetition_flashcard_id FK
        timestamp created_at
        timestamp update_at
    }
          `}></Mermaid>
  );
};

export default DataVisualizer;
