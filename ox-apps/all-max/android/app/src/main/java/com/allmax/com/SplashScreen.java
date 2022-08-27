package com.allmax.com;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

import com.allmax.app.R;
import com.allmax.com.MainActivity;

public class SplashScreen extends AppCompatActivity {

    Animation topAnim;
    ImageView image;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent i = new Intent(SplashScreen.this, MainActivity.class);
                startActivity(i);
                finish();
            }
        }, 4000);

        topAnim = AnimationUtils.loadAnimation(this, R.anim.top_animation);

        //Hooks
        image = findViewById(R.id.logo);

        image.setAnimation(topAnim);

    }


}
